import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { Block } from './';

describe('Block Tests', () => {
  it('Block render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Block title="BlockTitle">ChildrenNode</Block>);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
