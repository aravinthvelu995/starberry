import { useContext } from 'react';
import { Link, useHistory, useParams } from 'react-router-dom';
import parse from 'html-react-parser';
import { Row, Col, Image, Button, Typography, Modal } from 'antd';
import { ArrowLeftOutlined, ShareAltOutlined, HeartOutlined, HomeFilled } from '@ant-design/icons';
import ProductContext from '../../store/product-context';

import classes from './Property.module.css';

const { Text } = Typography;
const Property = () => {
    const params = useParams();
    const productCtx = useContext(ProductContext);
    const history = useHistory();
    const BackToHomeHandler = () => {
        history.push('../');
    }

    const { propertyId } = params;
    let property;
    if (productCtx.items.length > 0) {
        property = productCtx.items.find((product) => product.id === propertyId);
    } else {
        history.push('../');
    }



    const showModal = () => {
        Modal.info({
            content: (
                <Image src={property.floorplans[0].url} preview={false} />
            ),
            onOk() { },
        });
    };

    return (
        <>
            <Row className={classes.dummy}>
                <Col span={24}><Button className={classes.back} onClick={BackToHomeHandler}><ArrowLeftOutlined /> Back to Home</Button></Col>
            </Row>
            <Row className={classes.property}>
                <Col flex="1 1 0px">
                    <div className={classes.imagecontainer}>
                        <div className={classes.sectionone}>
                            <Image
                                src={property.urls[0].url}
                                preview={true}
                            />
                        </div>
                        <div className={classes.sectiontwo}>
                            <div>
                                <Image
                                    src={property.urls[1].url}
                                    preview={false}
                                />
                                <Image
                                    src={property.urls[2].url}
                                    preview={false}
                                />
                            </div>
                        </div>
                    </div>
                </Col>
                <Col flex="0 1 550px">
                    <div className={classes.content}>
                        <div className={classes.social}>
                            <ShareAltOutlined className={classes.icons} />
                            <HeartOutlined className={classes.icons} />
                        </div>
                        <div className={classes.pricecontainer}>
                            <Text className={classes.price}>€ {property.price}</Text>
                            <Text>${property.bedrooms} bed | {property.floorArea} sqm</Text>
                        </div>
                        <div className={classes.detailscontainer}>
                            <Text>{`${property.bedrooms} bedroom ${property.buildingType} for ${property.propertyType}`} in the <Text>Fontviellie</Text></Text>
                        </div>
                        <div className={classes.contactcontainer}>
                            <HomeFilled className={classes.icon} /><a href={property.negotiator.Phone}>Please contact us</a>
                        </div>
                        <Button className={classes.contact}>CONTACT AGENT</Button>
                        <div className={classes.facts}>
                            <div className={classes.headercontainer}>
                                <Text className={classes.factsheader}>FACTS &amp; FEATURES</Text>
                            </div>
                            <div className={classes.particulars}>
                                <div>
                                    <div>Neighbourhood:</div>
                                    <div>Fontvielle</div>
                                </div>
                                <div>
                                    <div>Price per sqm:</div>
                                    <div>{property.ppsqm}</div>
                                </div>
                                <div>
                                    <div>Brochure:</div>
                                    <div><Link to={property.brochure[0].url} className={classes.link} target="_blank" download>Download Brochure</Link></div>
                                </div>
                                <div>
                                    <div>Floor Plan:</div>
                                    <div onClick={showModal}>View Floorplan</div>
                                </div>
                            </div>
                            <div className={classes.description}>
                                {parse(property.description)}
                            </div>
                            <div className={classes.negotiator}>
                                <div className={classes.negotiatorprofile}>
                                    <div className={classes.profileicon}>
                                        <Image
                                            src={property.negotiator.Image.url}
                                            preview={false} />
                                    </div>
                                    <div className={classes.negotiatordetails}>
                                        <div className={classes.negotiatorname}>{property.negotiator.Name}</div>
                                        <div className={classes.negotiatordesignation}>{property.negotiator.Designation}</div>
                                        <div className={classes.negotiatorphone}>{property.negotiator.Phone} | {property.negotiator.Email}</div>
                                    </div>
                                </div>
                            </div>
                            <div className={classes.map}>
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d250646.68136328788!2d76.82714556974858!3d11.012014523817232!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba859af2f971cb5%3A0x2fc1c81e183ed282!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1625052776651!5m2!1sen!2sin" width="100%" height="80" style={{ border: 0 }} title="Google Map" loading="lazy"></iframe>
                            </div>
                        </div>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Property;