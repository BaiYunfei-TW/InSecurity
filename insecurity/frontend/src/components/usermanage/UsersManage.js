import React, {Component, Fragment} from 'react';
import './UsersManage.css';
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import {Link} from "react-router-dom";
import {bindActionCreators} from "redux";
import {banUser, users} from "../../actions/actions";
import {connect} from "react-redux";
import Col from "react-bootstrap/Col";
import {Badge} from "react-bootstrap";
import {withTranslation} from 'react-i18next';


class UsersManage extends Component {
    render() {
        return (
            <Container style={{background: '#fff', padding: '1em', boxShadow: '0 1px 3px rgba(27,95,160,.1)'}}>
                <h4 style={{display: 'inline-block'}}>
                    {this.renderHotIcon()}
                    {this.props.t('UserManagement')}
                </h4>{this.renderUserCount()}
                <Container style={{padding: 0, marginTop: '1em'}}>
                    <Container style={{padding: 0}}>
                        {this.renderAllUsersList()}
                    </Container>
                </Container>
            </Container>
        );
    }

    renderUserCount() {
        if (this.props.usersResult.users) {
            return <span
                style={{
                    color: 'gray',
                    marginLeft: '0.5em',
                    fontSize: '0.9em'
                }}>{this.props.t('Total')}: <strong>{this.props.usersResult.users.length}</strong> {this.props.t('Users')}</span>;
        }
    }

    renderAllUsersList() {
        if (!this.props.usersResult.users) {
            return <Row><Col><span style={{color: '#ccc'}}>&nbsp;&nbsp;{this.props.t('None')}</span></Col></Row>
        }

        return (<Fragment>{
            this.props.usersResult.users.map((item, index) => {
                if (item.username === 'admin') {
                    return null;
                }
                return <Container style={{marginBottom: '0em', paddingBottom: '0em'}}>
                    <Row>
                        <Col md={10} style={{marginBottom: '0.5em', paddingBottom: '0.5em'}}>
                            <Row style={{fontSize: '1em', color: '#303030'}}>
                                {item.del ? <Badge variant="dark" className={"banBadge"}>{this.props.t('Cancelled')}</Badge> : null}
                                {item.username} ({item.email})
                            </Row>
                            <Row style={{fontSize: '0.7em'}}>
                            {this.props.t('LastLogin')}&nbsp;<span
                                style={{color: 'gray'}}>{item.lastLoginTime}</span>
                            </Row>
                        </Col>
                        <Col md={2} style={{padding: 0}}>
                            <Row style={{height: '100%'}}>
                                <Col onClick={this.banUser.bind(this, item.uid)}
                                     style={{color: '#000', height: '100%'}}><Link>{item.del ? this.props.t('Recover') : this.props.t('Cancel')}</Link></Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>;
            })
        }</Fragment>);
    }

    banUser(uid) {
        this.props.banUser(uid);
    }

    componentWillMount() {
        this.props.users();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.banUserByUidResult !== this.props.banUserByUidResult) {
            this.props.users();
        }
    }

    renderHotIcon() {
        return (
            <svg id="icon-icon-2" className="SvgIcon" viewBox="0 0 1024 1024">
                <path
                    d="M237.13426 364.040587h186.270239V301.953326H237.13426v62.087261zM237.13426 519.267195h496.719227V457.175706H237.13426v62.091489zM237.13426 674.493803h496.719227v-62.091489H237.13426V674.493803zM237.13426 829.716183h496.719227v-62.091489H237.13426v62.091489z"
                    fill="#1B5A97"/>
                <path
                    d="M826.988606 414.807346v508.048185a91.976428 91.976428 0 0 0 5.713111 31.04363H143.999141V146.726718h414.490186a222.680218 222.680218 0 0 1 24.273319-62.091489H81.907652v931.351193h807.172443v-81.88228c-1.361674-3.49299 0-7.277767 0-11.25284V390.41562a222.646387 222.646387 0 0 1-62.091489 24.391726z"
                    fill="#1B5A97"/>
                <path
                    d="M777.038006 388.444999c-105.927243 0-192.110213-86.178741-192.110214-192.110213S671.106534 4.228801 777.038006 4.228801s192.110213 86.178741 192.110213 192.110213-86.18297 192.105984-192.110213 192.105985z m0-324.437863c-72.967966 0-132.32765 59.363912-132.32765 132.32765s59.363912 132.32765 132.32765 132.327649 132.32765-59.363912 132.327649-132.327649-59.363912-132.32765-132.327649-132.32765z"
                    fill="#106A37"/>
            </svg>
        );
    }

}

const mapStateToProps = state => ({
    usersResult: state.reduxResult.usersResult,
    banUserByUidResult: state.reduxResult.banUserByUidResult
});

const mapDispatchToProps = dispatch => bindActionCreators({
    users,
    banUser,
}, dispatch);


export default withTranslation()(connect(mapStateToProps, mapDispatchToProps)(UsersManage));
