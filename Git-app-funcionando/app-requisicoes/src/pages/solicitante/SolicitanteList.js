import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';

const SolicitanteList = (props) => {


  const operacoesBodyTemplate = (rowData) => {
    return (
      <>
        <button onClick={() => props.editar(rowData._id)}
          className="btn btn-warning btn-sm">
          Editar

        </button>
        <button onClick={() => props.excluir(rowData._id)}
          className="btn btn-danger btn-sm">
          Excluir
        </button>
      </>
    );
  }
  return (
    <div className="App">
      <h4>Listagem de solicitantes</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >
        Atualizar Lista
      </button>
      <button className="btn btn-success btn-sm" onClick={props.inserir}>
        Inserir
      </button>


        <DataTable value={props.solicitantes} responsiveLayout="scroll" paginator
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
          rows={10} rowsPerPageOptions={[10, 20, 30]}
          selectionMode="checkbox" selection={props.solicitante} 
          onSelectionChange={e => props.setSolicitante(e.value)} dataKey="_id"
          >

          <Column field="nome" header="Nome" sortable filter ></Column>
          <Column field="email" header="email" sortable filter ></Column>
          <Column header="Operações" body={operacoesBodyTemplate}></Column>
        </DataTable>
        {/* */}
    
    
    </div>
  );
};
export default SolicitanteList;
