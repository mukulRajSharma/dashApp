import React from 'react';
import './tags.scss';
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
import { Button } from 'devextreme-react/button';
import Form, { Item } from 'devextreme-react/form';
import { Center } from 'devextreme-react/map';

export default () => (
  <React.Fragment>
    <h2 className={'content-block'}>Tags</h2>
    <div className={'content-block'}>
      <div className={'dx-card responsive-paddings'}>
      <DataGrid>
            <FilterRow visible={true} />
            <GroupPanel visible={true} />
            <SearchPanel visible={true} highlightCaseSensitive={true} />
            <Grouping autoExpandAll={false} />
            <Column
              dataField="name"
              caption="Tag"
            />
        </DataGrid>
      </div>
      <div style={{textAlign:Center}}>
        <Form
          // onContentReady={this.validateForm}
          colCount={2}
          id="form"
          // formData={this.employee}
        >
          <Item dataField="Tag" editorOptions={{ disabled: false }} />            
        </Form>
      </div>
      <div style={{'text-align':'center', margin:20}}>
        <Button
              width={180}
              text="Add Tag"
              type="success"
              stylingMode="contained"
              // onClick={this.onSubmitClick}
          />
      </div>
    </div>
  </React.Fragment>
);
