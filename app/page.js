import Layout from '@components/layout';

import Header from '@components/header';
import Products from '@components/products';
import WhyChooseUs from '@components/whyChooseUs';
import Testimonials from '@components/testimonials';

export default async function Page() {
    const  data  = await getProducts();

    return <Layout>
        <Header {...data} />
        <Products products={data} />
        <WhyChooseUs />
        <Testimonials />
    </Layout>
}

async function getProducts() {
    const req = await fetch(`${process.env.NEXT_PUBLIC_SERVER}/articles`);
    return req.json();
}