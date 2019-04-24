import React from 'react';
import { shallow } from 'enzyme';
import Table from '../table';

describe('Table', () => {
  describe('Header', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <Table.Header rows={['Skin symptoms', 'Possible cause']} />
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders its children', () => {
      const shallowMount = shallow(
        <Table.Header rows={['Skin symptoms', 'Possible cause']} />
      );
      expect(
        shallowMount.containsMatchingElement(
          <th className="nhsuk-table__header" scope="col">
            Skin symptoms
          </th>
        )
      ).toBeTruthy();
      expect(
        shallowMount.containsMatchingElement(
          <th className="nhsuk-table__header" scope="col">
            Possible cause
          </th>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('Row', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <Table.Row
          items={['Blisters on lips or around the mouth', 'cold sores']}
        />
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('properly renders items', () => {
      const shallowMount = shallow(
        <Table.Row
          items={['Blisters on lips or around the mouth', 'cold sores']}
        />
      );
      expect(
        shallowMount.containsMatchingElement(
          <td className="nhsuk-table__cell">
            Blisters on lips or around the mouth
          </td>
        )
      ).toBeTruthy();
      expect(
        shallowMount.containsMatchingElement(
          <td className="nhsuk-table__cell">cold sores</td>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('Body', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(
        <Table.Body>
          <Table.Row />
        </Table.Body>
      );
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
  });
  describe('TablePanel', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<Table.Panel />);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders heading', () => {
      const shallowMount = shallow(<Table.Panel heading="test" />);
      expect(
        shallowMount.containsMatchingElement(
          <h3 className="nhsuk-table__heading-tab">test</h3>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
  describe('NormalTable', () => {
    it('matches snapshot', () => {
      const shallowMount = shallow(<Table />);
      expect(shallowMount).toMatchSnapshot();
      shallowMount.unmount();
    });
    it('renders caption', () => {
      const shallowMount = shallow(<Table caption="Caption" />);
      expect(
        shallowMount.containsMatchingElement(
          <caption className="nhsuk-table__caption">Caption</caption>
        )
      ).toBeTruthy();
      shallowMount.unmount();
    });
  });
});
