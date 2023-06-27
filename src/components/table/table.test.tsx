import { create, act as testAct, ReactTestRenderer } from 'react-test-renderer';
import { render as testRender, fireEvent } from '@testing-library/react';
import { TColumn, TRow, Table } from './';
import { LoadingStatus } from '../../constants/statuses';

interface TestTableData {
  col1: string;
  col2: string;
}

const columns: TColumn<TestTableData>[] = [
  {
    accessor: 'col1',
    Header: 'Col1',
  },
  {
    accessor: 'col2',
    Header: 'Col2',
  },
];
const data: TRow<TestTableData>[] = [
  {
    col1: 'Test1-1',
    col2: 'Test1-2',
    name: '1',
    url: 'some-path/1/',
  },
  {
    col1: 'Test2-1',
    col2: 'Test2-2',
    name: '2',
    url: 'some-path/2/',
  },
];

describe('Table Tests', () => {
  it('render empty table', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Table rows={[]} columns={[]} total={0} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render table with data', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Table rows={data} columns={columns} total={data.length} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render table with loading', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Table rows={[]} columns={[]} total={0} loading={LoadingStatus.Loading} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('render table with error', () => {
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(<Table rows={[]} columns={[]} total={0} loading={LoadingStatus.Error} />);
    });
    expect(component.toJSON()).toMatchSnapshot();
  });

  it('on row click', () => {
    const onClick = jest.fn();
    const { container } = testRender(<Table rows={data} columns={columns} total={data.length} onRowClick={onClick} />);
    const row = container.querySelectorAll<HTMLTableRowElement>('tbody tr')[0] as HTMLTableRowElement;
    fireEvent.click(row);
    expect(onClick).toHaveBeenCalledWith('1');
  });

  it('on row click without callback', () => {
    const onClick = jest.fn();
    const { container } = testRender(<Table rows={data} columns={columns} total={data.length} />);
    const row = container.querySelectorAll<HTMLTableRowElement>('tbody tr')[0] as HTMLTableRowElement;
    fireEvent.click(row);
    expect(onClick).not.toHaveBeenCalled();
  });

  it('on scroll', () => {
    const onScroll = jest.fn();
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(
        <div style={{ height: 100 }}>
          <Table rows={data} columns={columns} total={20} size={5} onLoad={onScroll} />
        </div>
      );
    });
    const tbody = component.root.findByType('tbody');
    testAct(() => tbody.props.onScroll({ currentTarget: { scrollTop: 100 } }));
    expect(onScroll).toHaveBeenCalledWith([1]);
  });

  it('on scroll longer page', () => {
    const onScroll = jest.fn();
    let component: ReactTestRenderer;
    testAct(() => {
      component = create(
        <div style={{ height: 100 }}>
          <Table rows={data} columns={columns} total={20} size={10} onLoad={onScroll} />
        </div>
      );
    });
    const tbody = component.root.findByType('tbody');
    testAct(() => tbody.props.onScroll({ currentTarget: { scrollTop: 100 } }));
    expect(onScroll).not.toHaveBeenCalled();
  });
});
