import { useState } from 'react';
import { useHistory } from 'react-router-dom';

import classes from './PreviewCard.module.css';
import { HeartOutlined } from '@ant-design/icons';
import { Avatar, Col, Typography, Image } from 'antd';
const { Text } = Typography;

const PreviewCard = (props) => {
    const history = useHistory();
    const [random] = useState(Date.now());
    const ViewIndividualHandler = (id) => {
        history.push(`/property/${id}`);
    }

    return (
        <Col className={`gutter-row ${classes.col}`} span={8} onClick={() => ViewIndividualHandler(props.id)}>
            <div className={classes.colcontainer}>
                <div className={classes.avatar}>
                    <Avatar
                        size={36}
                        icon={<HeartOutlined />}
                    />
                </div>
                <Image
                    width={`100%`}
                    height={220}
                    src={`${props.urls[0].url}?${random}`}
                    preview={false}
                    placeholder={
                        <Image
                            preview={false}
                            src={`${props.urls[0].formats.thumbnail.url}?x-oss-process=image/blur,r_50,s_50/quality,q_1/resize,m_mfit,h_200,w_200`}
                            width={400}
                            height={220}
                            className={classes.previewimage}
                        />
                    }
                    className={classes.img}
                />
                <div className={classes.infocontainer}><Text className={classes.name}>{props.name}</Text></div>
                <div className={classes.infocontainer}><Text className={classes.content}>{`${props.bedrooms} bedroom ${props.buildingType} for ${props.propertyType}`}</Text></div>
                <div className={classes.infocontainer}><Text className={classes.price}>{props.price} €</Text></div>
            </div>
        </Col>
    )
}

export default PreviewCard;