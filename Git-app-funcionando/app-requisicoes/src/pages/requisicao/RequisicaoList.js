import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';

const RequisicaoList = (props) => {
  const operacoesBodyTemplate = (rowData) => {
    return (
      <>
        <Button icon="pi pi-filter" 
          onClick={() => props.editar(rowData._id)}
          className="p-button-rounded p-button-text p-button-plain" aria-label="Filter"
        > 
        </Button>
        <Button icon="pi pi-bell" 
          onClick={() => props.excluir(rowData._id)}
          className="p-button-rounded p-button-warning p-button-text" aria-label="Notification"   
        > 
        </Button>
      </>
    )
  }
  return (

    <div className='App'>
      <h4>Listagem de Requisiçôes</h4>
      <button
        className="btn btn-primary btn-sm"
        onClick={props.onClickAtualizar}
      >Atualizar Lista
      </button>
      <button
        className="btn btn-success btn-sm"
        onClick={props.inserir}
      >inserir
      </button>
      
      <DataTable value={props.requisicaos} paginator responsiveLayout="scroll"
        paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
        currentPageReportTemplate="Showing {first} to {last} of {totalRecords}"
        rows={10} rowsPerPageOptions={[10, 20, 50]}
        
        selectionMode="single" selection={props.requisicao} 
        onSelectionChange={e => props.setRequisicao(e.value)} dataKey="_id"
        
        >
        {/* <Column field="_id" header="Id" sortable ></Column> */}
        <Column field="titulo" header="titulo" sortable filter></Column>
        <Column field="descricao" header="descricao" sortable filter></Column>
        <Column field="dataHoraCriada" header="dataHoraCriada" sortable filter></Column>
        <Column field="status" header="status" sortable filter></Column>
        <Column field="prazoAtendimento" header="prazoAtendimento" sortable filter></Column>
        <Column body={operacoesBodyTemplate} header="Operações"></Column>
      </DataTable>

    </div>
  );
};
export default RequisicaoList;
