import { Row, Col, Select, Typography } from 'antd';
import classes from './DropdownContainer.module.css';

const { Option } = Select;
const { Text } = Typography;

const DropdownContainer = () => {
    return (
        <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={classes.row}>
            <Col className={`gutter-row ${classes.colMain}`} span={8}>
                <Col className={`gutter-row ${classes.col}`} span={12}>
                    <Select placeholder="All Bedrooms" defaultValue="All Bedrooms" style={{ width: 125 }} bordered={false} className={`${classes.select}`}>
                        <Option value="1 Bedroom">1 Bedroom</Option>
                        <Option value="2 Bedrooms">2 Bedrooms</Option>
                        <Option value="3 Bedrooms">3 Bedrooms</Option>
                    </Select>
                </Col>
                <Col className={`gutter-row ${classes.col}`} span={12}>
                    <Select placeholder="All Neighbourhood" defaultValue="All Neighbourhood" style={{ width: 175 }} bordered={false} className={classes.select}>
                        <Option value="1 Bedroom">1 Neighbourhood</Option>
                        <Option value="2 Bedrooms">2 Neighbourhoods</Option>
                        <Option value="3 Bedrooms">3 Neighbourhoods</Option>
                    </Select>
                </Col>
            </Col>
            <Col className={`gutter-row ${classes.colMain}`} span={8}>
                <Col className={`gutter-row ${classes.col}`} span={12}>
                    <Select placeholder="Min Price" defaultValue="Min Price" style={{ width: 100 }} bordered={false} className={`${classes.select}`}>
                        <Option value="1000">1000</Option>
                        <Option value="2000">2000</Option>
                        <Option value="3000">3000</Option>
                    </Select>
                </Col>
                <Col className={`gutter-row ${classes.col}`} span={12}>
                    <Select placeholder="Max Price" defaultValue="Max Price" style={{ width: 100 }} bordered={false} className={classes.select}>
                        <Option value="1000">1000</Option>
                        <Option value="2000">2000</Option>
                        <Option value="3000">3000</Option>
                    </Select>
                </Col>
            </Col>
            <Col className={`gutter-row ${classes.colMain}`} span={8}>
                <Col className={`gutter-row ${classes.col}`} span={12}>
                    <Select placeholder="Sort By" defaultValue="Sort By" style={{ width: 120 }} bordered={false} className={`${classes.select}`}>
                        <Option value="Newly Added">Newly Added</Option>
                        <Option value="Low Price">Low Price</Option>
                        <Option value="High price">High Price</Option>
                    </Select>
                </Col>
                <Col className={`gutter-row ${classes.col} ${classes.mauto} ${classes.fbold}`} span={12}>
                    <Text>12 Results</Text>
                </Col>
            </Col>
        </Row>
    )
}

export default DropdownContainer;