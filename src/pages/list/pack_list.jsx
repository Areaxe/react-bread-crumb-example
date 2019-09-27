import React from 'react';
import Layout from '../../components/layout/layout';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom';

class PackList extends React.Component {
    render() {
        let { breadCrumbs } = this.props;
        return (
            <Layout navigators={breadCrumbs}>
                list detail
                <Link to='/list' >To list</Link>
            </Layout>
        );
    }
}

function select(state) {
    return {
        breadCrumbs: state.breadCrumbReducer,
    };
}

export default connect(select)(PackList);
