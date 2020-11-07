import React, {Component, Fragment} from 'react';
import './ArticleList.css';
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import {Link} from "react-router-dom";
import {Button, Image} from "react-bootstrap";
import {withTranslation} from 'react-i18next';


class ArticleList extends Component {
    render() {
        return (<Fragment>
            {
                this.props.articles ?
                    this.props.articles.map((item, index) => {
                        const path = {
                            pathname: "/article",
                            state: {
                                article: item
                            }
                        };
                        return <Row className={"Article-Card"}>
                            <Col style={{padding: 0, paddingRight: '0.5em'}} md={8}>
                                <Link to={path}>
                                    {this.renderTitle(item.article.title)}
                                </Link>
                                <p style={{fontSize: '0.8em', marginBottom: 0}}><span style={{color: 'gray'}}>{this.props.t('Author')}:</span>{item.authorName}</p>
                                <p style={{
                                    color: '#828a92',
                                    fontWeight: 'light',
                                    marginTop: 0,
                                    marginBottom: '0.5em'
                                }}>{item.article.content.substr(0, 50)}...</p>
                                <Button variant="link" style={{padding: 0, margin: 0}}>{this.renderTagIcon()}</Button>
                                {
                                    item.tags.map((tag, index) => {
                                        let path = {
                                            pathname: "/topic",
                                            state: {
                                                tag: tag,
                                            }
                                        };
                                        return <Fragment>
                                            <Button variant="link" style={{padding: 0, margin: 0}}>
                                                <Link className={"tagLink"} to={path}>{tag}</Link>
                                            </Button>
                                            {(index === item.tags.length - 1) ? '' : ','}
                                        </Fragment>
                                    })
                                }
                            </Col>
                            <Col style={{padding: 0}} md={4} className={"imgContainer"}>
                                <Image style={{width: '100%', height: '8em', borderRadius: '4px'}} src={item.article.imgUrl}/>
                            </Col>
                        </Row>
                    }) : <span style={{color: 'gray'}}>{this.props.t('None')}</span>
            }

        </Fragment>);
    }

    renderTitle(title) {
        let html = {
            __html: title
        };
        // return <h5>{title}</h5>;
        return <h6 className={"title"}>
            <div style={{width: '100%'}} dangerouslySetInnerHTML={html}></div>
        </h6>;
    }

    renderTagIcon() {
        return (
            <svg t="1589901720528" className="icon SvgIcon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1156"
                 width="200"
                 height="200">
                <path
                    d="M194.133333 388.266667c0 53.333333 42.666667 96 96 96s96-42.666667 96-96-42.666667-96-96-96-96 42.666667-96 96z m128 0c0 17.066667-14.933333 32-32 32s-32-14.933333-32-32 14.933333-32 32-32 32 14.933333 32 32zM951.466667 569.6L469.333333 104.533333c-12.8-12.8-32-12.8-44.8 0-12.8 12.8-12.8 32 0 44.8l458.666667 441.6-270.933333 273.066667c-12.8 12.8-12.8 32 0 44.8 6.4 6.4 14.933333 8.533333 23.466666 8.533333 8.533333 0 17.066667-2.133333 23.466667-8.533333l294.4-294.4c6.4-6.4 8.533333-14.933333 8.533333-23.466667 0-8.533333-4.266667-14.933333-10.666666-21.333333z"
                    fill="#007bff" p-id="1157"/>
                <path
                    d="M
                797.866667 593.066667c0-8.533333-4.266667-17.066667-8.533334-23.466667L371.2 151.466667l-12.8-12.8c-6.4-6.4-14.933333-8.533333-23.466667-8.533334H64c-17.066667 0-32 14.933333-32 32v270.933334c0 8.533333 4.266667 17.066667 8.533333 23.466666l430.933334 430.933334c6.4 6.4 14.933333 8.533333 23.466666 8.533333s17.066667-2.133333 23.466667-8.533333L789.333333 616.533333c4.266667-6.4 8.533333-14.933333 8.533334-23.466666zM494.933333 819.2L96 420.266667V194.133333h226.133333l398.933334 398.933334-226.133334 226.133333z"
                    fill="#007bff" p-id="1158"/>
            </svg>);
    }
}

export default withTranslation()(ArticleList);
