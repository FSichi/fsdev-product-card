import React from 'react';
import renderer from 'react-test-renderer';
import { ProductImage, ProductCard } from '../../src/components';
import { product2 } from '../data/products';

describe('ProductImage', () => {

    test('Debe de mostrar el componente correctamnente con la imagen personalizada', () => {

        const wrapper = renderer.create(
            <ProductImage img='https://hola.jpg' />
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

    test('Debe Mostrar el componente con la imagen del Producto', () => {

        const wrapper = renderer.create(
            <ProductCard product={product2} >
                {
                    () => (
                        <ProductImage />
                    )
                }
            </ProductCard>
        )

        expect(wrapper.toJSON()).toMatchSnapshot();

    });

});
