import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { render as testRender, fireEvent } from "@testing-library/react";
import { Input } from './';

describe('Input Tests', () => {
  it('render', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Input className="custom-class" label="Label" placeholder='Placeholder' value="Test" onChange={() => {}} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render with firstIcon', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Input firstIcon={<div>SomeIcon</div>} value="Test" onChange={() => {}} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('on change', () => {
    const onChange = jest.fn();
    const { container } = testRender(<Input value="Test" onChange={onChange} />);
    const input = container.querySelector<HTMLInputElement>(".input__component") as HTMLInputElement;
    fireEvent.change(input, { target: { value: 'NewValue'}});
    expect(onChange).toHaveBeenCalledTimes(1);
  });

  it('on clear', () => {
    const onChange = jest.fn();
    const { container } = testRender(<Input clearable value="Test" onChange={onChange} />);
    const clearButton = container.querySelector<HTMLDivElement>(".input__actions > div") as HTMLDivElement;
    fireEvent.click(clearButton);
    expect(onChange).toHaveBeenCalledTimes(1);
  });
});
