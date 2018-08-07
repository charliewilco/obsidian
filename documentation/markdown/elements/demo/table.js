import snippet from '!raw-loader!obsidian.css/src/objects/obsidian.rd-table.css';

const TableResponsive = () => (
  <table className="table">
    <thead>
      <tr>
        <th className="table__heading h6 u-left u-p2">Name</th>
        <th className="table__heading h6 u-left u-p2">Type</th>
        <th className="table__heading h6 u-left u-p2">Grade</th>
      </tr>
    </thead>
    <tbody>
      <tr className="table__row">
        <td className="table__content u-p2" data-heading="Name">
          Gizmo
        </td>
        <td className="table__content u-p2" data-heading="Type">
          Robot
        </td>
        <td className="table__content u-p2" data-heading="Grade">
          A+
        </td>
      </tr>
      <tr className="table__row">
        <td className="table__content u-p2" data-heading="Name">
          Sherlock Holmes
        </td>
        <td className="table__content u-p2" data-heading="Type">
          Human
        </td>
        <td className="table__content u-p2" data-heading="Grade">
          B-
        </td>
      </tr>
      <tr className="table__row">
        <td className="table__content u-p2" data-heading="Name">
          Merlin
        </td>
        <td className="table__content u-p2" data-heading="Type">
          Wizard
        </td>
        <td className="table__content u-p2" data-heading="Grade">
          C
        </td>
      </tr>
      <tr className="table__row">
        <td className="table__content u-p2" data-heading="Name">
          Richard Nixon
        </td>
        <td className="table__content u-p2" data-heading="Type">
          Cyborg
        </td>
        <td className="table__content u-p2" data-heading="Grade">
          B-
        </td>
      </tr>
    </tbody>
  </table>
);

export { TableResponsive, snippet };
