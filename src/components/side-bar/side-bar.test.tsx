import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { SideBar } from './';

jest.mock('react-router-dom', () => ({
  __esModule: true,
  Link: 'Link',
}));

describe('SideBar Tests', () => {
  it('render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<SideBar />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
