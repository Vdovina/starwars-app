import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { SideBar } from './';

describe('SideBar Tests', () => {
  it('SideBar render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<SideBar />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
