import React from 'react';
import './home.scss';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
  MasterDetail,
  Selection,
  Button as GridButton
} from 'devextreme-react/data-grid';
import DropDownButton from 'devextreme-react/drop-down-button';
import notify from 'devextreme/ui/notify';
import { Button } from 'devextreme-react/button';
import {
  Popup
} from 'devextreme-react/popup';
import { TagBox } from 'devextreme-react/tag-box';
import Form, { Item } from 'devextreme-react/form';
import DropDownBox from 'devextreme-react/drop-down-box';


var jj = require('./port_info.json');
const pageSizes = [5,10, 25, 50, 100];


class App extends React.Component {
  constructor(props){
    super(props);
    this.dropDataSource=["Arunan", "Mukul"];
    this.dataGridRef = React.createRef();
    this.selectedRowsData = [];
    this.tagDataSrc=[]

    this.getSelectedData = () => {
      this.selectedRowsData = this.dataGrid.getSelectedRowsData();
      // return this.selectedRowsData;
      return this.selectedRowsData;
    }

    this.state = {
      currentUser: "Mukul",
      allMode: 'allPages',
      checkBoxesMode: 'onClick',
      isTagVisible: false,
      postId:1
    }
    this.onToolbarPreparing = this.onToolbarPreparing.bind(this);
    this.onItemClick = this.onItemClick.bind(this);
    // this.setCurrentUser = this.setCurrentUser.bind(this);
    this.onSubmitClick = this.onSubmitClick.bind(this);
    // this.sendJson = this.sendJson.bind(this);
    this.hideTag = this.hideTag.bind(this);
    this.showTag = this.showTag.bind(this);
  }
  onToolbarPreparing(e) {
    e.toolbarOptions.items.unshift({
      location: 'before',
      widget: 'dxButton',
      options: {
        width: 100,
        text: 'New',
        icon: 'add',
        stylingMode: 'contained',
        type: 'success'
        // onClick: this.collapseAllClick.bind(this)
      }
    },{
      location: 'after',
      widget: 'dxButton',
      options: {
        icon: 'refresh',
        // onClick: this.refreshDataGrid.bind(this)
      }
    });
  }
  get dataGrid() {
    return this.dataGridRef.current.instance;
  }
  hideTag() {
    this.setState({
        isTagVisible: false
    });
  }
  showTag() {
    this.setState({
        isTagVisible: true
    });
  }
  render() {
    return (
      <React.Fragment>
        <div style={{'margin':'auto', 'width':'80%'}}>
          <div>
            <h2>Raw Data</h2>
            {/* <DropDownButton
              text="Select user"
              icon="user"
              dropDownOptions={{ width: 230 }}
              items={this.dropDataSource}
              onItemClick={this.onItemClick}
              // onOptionChanged={this.setCurrentUser}
            /> */}
          </div>
          <div>
            <DataGrid
            dataSource={jj}
            allowColumnReordering={true}
            showBorders={true}
            ref={this.dataGridRef}
            onToolbarPreparing={this.onToolbarPreparing}
            >
            <FilterRow visible={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />

            <Selection
              mode="multiple"
              selectAllMode={this.state.allMode}
              showCheckBoxesMode={this.state.checkBoxesMode}
            />
            <Column
              dataField="port"
              caption="Port"
            />
            <Column
              dataField="ip_proto"
              caption="IP Protocol"
            />
            <Column
              dataField="service"
              caption="Service"
            />
            <Column
              dataField="description"
              caption="Name"
            />
            <Column
              dataField="source"
              caption="Source"
            />
            <Column type="buttons" caption="">
                <GridButton name="tags" icon="edit" onClick={this.showTag}/>
            </Column>

            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={5} />

            </DataGrid>
            <div style={{'text-align':'center', margin:20}}>
              <Button
                    width={180}
                    text="Trust selected"
                    type="success"
                    stylingMode="contained"
                    onClick={this.onSubmitClick}
                />
            </div>
            
            <div>
              <Popup
                  showTitle={true}
                  title="Edit Service"
                  width={800}
                  height={550} 
                  resizeEnabled={true}
                  visible={this.state.isTagVisible}
                  onHiding={this.hideTag}
                  
              >
                <div>
              <Form
                onContentReady={this.validateForm}
                colCount={2}
                id="form"
                formData={this.employee}
              >
                <Item dataField="Port" editorOptions={{ disabled: false }} />
                <Item dataField="IP Protcol" editorOptions={{ disabled: false }} />
                <Item dataField="Service" editorOptions={{ disabled: false }} />
                <Item dataField="Name" editorOptions={{ disabled: false }} />
                <Item dataField="Source" editorOptions={{ disabled: false }} />
                           
              </Form>
              <div style={{'margin':20}}>
                <DropDownBox
                    valueExpr="Vendor"
                    displayExpr="vendor"
                    placeholder="Select a Vendor..."
                    showClearButton={true}
                />
              </div>
              <div style={{'margin':20}}>
                <DropDownBox
                  valueExpr="Tags"
                  displayExpr="tags"
                  placeholder="Select tags..."
                  showClearButton={true}
                /> 
              </div>
            </div>
            <div style={{'text-align':'center', margin:20}}>
              <Button
                    width={180}
                    text="Add to trusted"
                    type="success"
                    stylingMode="contained"
                    onClick={this.onSubmitClick}
                />
            </div>
              </Popup>
            </div>
          </div>
      </div>
      </React.Fragment>
    );
  }
  async onSubmitClick(){
    let r = this.getSelectedData();
    let c = this.state.currentUser;
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ rows: r, user: 'admin' })
    };
    const response = await fetch('/addTrusted', requestOptions);
    const data = await response.json();
    this.setState({ postId: data.id });
    notify("Added items to trusted list",'success', 5000);
  }
  onItemClick(e){
    this.setState({
      currentUser: e.value
    });
    notify("User set to "+e.value, 'success', 5000);
  }

}

export default App;
