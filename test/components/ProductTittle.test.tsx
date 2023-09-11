import React from 'react';
import renderer from 'react-test-renderer';
import { ProductTitle, ProductCard } from '../../src/components';
import { product1 } from '../data/products';

describe('ProductTittle', () => {

    test('Debe de mostrar el componente correctamnente con el titulo personalizado', () => {

        const wrapper = renderer.create(
            <ProductTitle title="Custom Product" className='custom-class' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe Mostrar el componente con el nombre del Producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product1} >
                {
                    () => (
                        <ProductTitle />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
