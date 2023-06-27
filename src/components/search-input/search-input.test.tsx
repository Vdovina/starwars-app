import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { SearchInput } from './';

describe('SearchInput Tests', () => {
  it('render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<SearchInput value="" onChange={() => {}} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
