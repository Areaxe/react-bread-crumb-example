import React from 'react';
import Layout from '../../components/layout/layout';
import { connect } from 'react-redux';

class PatchList extends React.Component {
    render() {
        let { breadCrumbs } = this.props;
        let ths = [
            'ID',
            'Patch包版本',
        ];
        let data = [
            {id:1,version:'1.0.0'},
            {id:2,version:'1.1.0'},
            {id:3,version:'1.2.0'},
        ]
        return (
            <Layout navigators={breadCrumbs}>
                <table>
                    <thead>
                    <tr>{ths.map((item,i)=><th key={i}>{item}</th>)}</tr>

                    </thead>
                    <tbody>
                        {
                            data.map(item=><tr key={item.id}>
                                <td>{item.id}</td>
                                <td>{item.version}</td>
                            </tr>)
                        }
                    </tbody>
                    
                    
                </table>
            </Layout>
        );
    }
}
function select(state) {
    console.log(state)
    return {
        breadCrumbs: state.breadCrumbReducer,
    };
}

export default connect(select)(PatchList);
