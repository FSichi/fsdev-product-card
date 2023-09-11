# FS-DEV-PRODUCT-CARD

Este es un paquete de pruebas de despliegue en NPM

### Facundo Sichi

## Ejemplo

```
import {ProductCard, ProductImage, ProductTitle, ProductButtons} from 'fs-dev-product-card'
```

```
<ProductCard
    product={product}
    initialValues={{
        count: 4,
        maxCount: 10,
    }}
>
    {
        ({ reset, count, isMaxCountReached, increaseBy, maxCount }) => (
            <>
                <ProductImage />
                <ProductTitle />
                <ProductButtons />
            </>
        )
    }
</ProductCard>
```