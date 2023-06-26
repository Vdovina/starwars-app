import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { GridWrapper } from './';

describe('GridWrapper Tests', () => {
  it('GridWrapper render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(
        <GridWrapper>
          <div>Block1</div>
          <div>Block2</div>
          <div>Block3</div>
          <div>Block4</div>
        </GridWrapper>
      );
    });
    expect(component.toJSON()).toMatchSnapshot();
  });
});
