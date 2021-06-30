import { useContext } from 'react';
import { Row, Spin, Alert } from 'antd';
import classes from './PreviewContainer.module.css';
import PreviewCard from './PreviewCard';
import ProductContext from '../../store/product-context';

const PreviewContainer = () => {
    const productCtx = useContext(ProductContext);
    return (
        <>
            {productCtx.items.length === 0 && !productCtx.isLoading && productCtx.error && <Alert message="Eror In Data Feching" description={productCtx.error} type="info" />}
            {productCtx.isLoading && <Spin size="large" className={classes["ant-spin-spinning"]} tip="Loading..."></Spin>}
            {!productCtx.isLoading && productCtx.items.length > 0 && <Row gutter={{ xs: 8, sm: 16, md: 24, lg: 32 }} className={classes.row}>
                {productCtx.items.map((data) => {
                    return <PreviewCard {...data} key={data.id} />
                })
                }
            </Row>
            }
        </>
    )
}

export default PreviewContainer;