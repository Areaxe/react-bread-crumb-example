import React from 'react';
import Layout from '../../components/layout/layout';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class Home extends React.Component {
    render() {
        let { breadCrumbs } = this.props;
        return (
            <Layout navigators={breadCrumbs}>
                <Link to='/basePacks' >进入游戏包列表</Link>
            </Layout>
        );
    }
}
function select(state) {
    return {
        breadCrumbs: state.breadCrumbReducer,
    };
}

export default connect(select)(Home);
