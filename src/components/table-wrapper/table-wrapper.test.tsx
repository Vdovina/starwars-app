import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { TableWrapper } from './';


describe('TableWrapper Tests', () => {
  it('render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<TableWrapper>ChildrenNode</TableWrapper>);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
