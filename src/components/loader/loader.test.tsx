import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { Loader } from './';

describe('Loader Tests', () => {
  it('render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Loader />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
