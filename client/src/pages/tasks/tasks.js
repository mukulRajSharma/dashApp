import React from 'react';
import 'devextreme/data/odata/store';
import DataGrid, {
  Column,
  Grouping,
  GroupPanel,
  Pager,
  Paging,
  SearchPanel,
  FilterRow,
  Button,
} from 'devextreme-react/data-grid';
import {
  Popup
} from 'devextreme-react/popup';
import { TagBox } from 'devextreme-react/tag-box';
import TextBox from "devextreme/ui/text_box";


const pageSizes = [5, 10, 25, 50, 100];

class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      rows: [],
      isTagVisible: false,
      isRiskVisible: false
    }
    this.tagDataSrc = [{id: 1, name:"Streaming"}, {id:2, name:"Printing"}, {id:3, name:"Web"}, {id:3, name:"Discovery"}]
    this.riskDataSrc = [{id: 1, name:"High"}, {id:2, name:"Low"}]
    this.items = ["Camera", "Sensor"]

    this.showRisk = this.showRisk.bind(this);
    this.hideRisk = this.hideRisk.bind(this);
    this.showTag = this.showTag.bind(this);
    this.hideTag = this.hideTag.bind(this);
  }
  async componentDidMount(){
    const response = await fetch('/getTrusted');
    const data = await response.json();
    this.setState({ rows: data })
    console.log(this.state.rows)
  }
  showRisk() {
    this.setState({
        isRiskVisible: true
    });
  } 

  hideRisk() {
    this.setState({
        isRiskVisible: false
    });
  }
  showTag() {
    this.setState({
        isTagVisible: true
    });
  } 

  hideTag() {
    this.setState({
        isTagVisible: false
    });
  }
  render(){
    return(
      <div style={{'margin':'auto', 'width':'80%'}}>
        <div>
          <h2>Trusted List</h2>
        </div>
        <div>
          <DataGrid
            dataSource={this.state.rows}
            allowColumnReordering={true}
            showBorders={true}
            wordWrapEnabled={true}
          >
            <FilterRow visible={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />

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
              dataField="name"
              caption="Description"
            />
            <Column
              dataField="author"
              caption="Author"
            />
            <Column type="buttons" caption="Risk">
              <Button name="risks" icon="add" onClick={this.showRisk}/>
            </Column>

            <Pager allowedPageSizes={pageSizes} showPageSizeSelector={true} />
            <Paging defaultPageSize={5} />
          </DataGrid>
          <div>
            <Popup
              showTitle={true}
              title="Add Tags"
              width={300}
              height={400} 
              resizeEnabled={true}
              visible={this.state.isTagVisible}
              onHiding={this.hideTag}
            >
              <TagBox
                dataSource={this.tagDataSrc}
                valueExpr="name"
                displayExpr="name"
                searchEnabled={true}
              />
            </Popup>          
          </div>
          <div>
            <Popup
              showTitle={true}
              title="Add Risk"
              width={300}
              height={400} 
              resizeEnabled={true}
              visible={this.state.isRiskVisible}
              onHiding={this.hideRisk}
            >
              <TagBox
                dataSource={this.riskDataSrc}
                valueExpr="name"
                displayExpr="name"
                searchEnabled={true}
              />
            </Popup>          
          </div>
        </div>
        
      </div>
    )
  }
}

export default App;