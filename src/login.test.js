import { Experimental_CssVarsProvider } from '@mui/material';
import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import LoginAdmin from './loginadmin';
import LoginUser from './loginuser';

describe('testing UI', () => {
    it('test case for adminlogin', async () => {
      render(<BrowserRouter><LoginAdmin/></BrowserRouter>)
        //   fireEvent.change(screen.getByTestId("usernamelbl"),{target:{value:"Enter UserName"}})
          fireEvent.change(screen.getByTestId("username"),{target:{value:"pradeep@gmail.com"}})
        //   fireEvent.change(screen.getByTestId("passwordlbl"),{target:{value:"Enter Password"}})
          fireEvent.change(screen.getByTestId("password"),{target:{value:"C123"}})
          fireEvent.click(screen.getByTestId("loginadminctrl"))
          //expect(screen.getByTestId("statuslbl").textContent).toBe("valid details")
          await waitFor(()=>expect(screen.getByTestId('statuslbl').textContent).toBe("valid details")) 

          fireEvent.change(screen.getByTestId("username"),{target:{value:"pradeep@gmail.com"}})
        //   fireEvent.change(screen.getByTestId("passwordlbl"),{target:{value:"Enter Password"}})
          fireEvent.change(screen.getByTestId("password"),{target:{value:"1234"}})
          fireEvent.click(screen.getByTestId("loginadminctrl"))
          //expect(screen.getByTestId("statuslbl").textContent).toBe("invalid details")
          await waitFor(()=>expect(screen.getByTestId('statuslbl').textContent).toBe("invalid details")) 
    });

    it('test case for userlogin', async () => {
      render(<BrowserRouter><LoginUser/></BrowserRouter>)
        //   fireEvent.change(screen.getByTestId("usernamelbl"),{target:{value:"Enter UserName"}})
          fireEvent.change(screen.getByTestId("username"),{target:{value:"pavan@gmail.com"}})
        //   fireEvent.change(screen.getByTestId("passwordlbl"),{target:{value:"Enter Password"}})
          fireEvent.change(screen.getByTestId("password"),{target:{value:"P123"}})
          fireEvent.click(screen.getByTestId("loginuserlbl"))
          //expect(screen.getByTestId("statuslbl").textContent).toBe("valid details")
          await waitFor(()=>expect(screen.getByTestId('statuslbl').textContent).toBe("valid details")) 

          fireEvent.change(screen.getByTestId("username"),{target:{value:"pavan@gmail.com"}})
        //   fireEvent.change(screen.getByTestId("passwordlbl"),{target:{value:"Enter Password"}})
          fireEvent.change(screen.getByTestId("password"),{target:{value:"P1234"}})
          fireEvent.click(screen.getByTestId("loginuserlbl"))
          //expect(screen.getByTestId("statuslbl").textContent).toBe("invalid details")
          await waitFor(()=>expect(screen.getByTestId('statuslbl').textContent).toBe("invalid details")) 
    });
    
  });