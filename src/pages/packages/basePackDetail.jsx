import React from 'react';
import Layout from '../../components/layout/layout';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class ListDetail extends React.Component {
    render() {
        let { breadCrumbs, match } = this.props;
        return (
            <Layout navigators={breadCrumbs}>
                游戏包详情页
                <p><Link to={`/basePacks/${match.params.id}/patchList`} >查看Patch包</Link></p>
            </Layout>
        );
    }
}

function select(state) {
    return {
        breadCrumbs: state.breadCrumbReducer,
    };
}

export default connect(select)(ListDetail);
