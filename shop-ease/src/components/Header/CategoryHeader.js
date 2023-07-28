import './CategoryHeader.css';
// import Categories from './../Categories'


function CategoryHeader({ category }) {
    const defaultCategory = 'LEATHER BAGS';
    const activeCategory = category || defaultCategory;

    return (
        <div className='category__header'>
            {/* <Categories/> */}
            <h2 className="header__title">{activeCategory}</h2>
            {/* change static header__descriptions to active after fetch - TODO */}
            <p className='header__descriptions'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Et aliquid dolore veritatis reiciendis, explicabo doloribus ut rem, minima, tempora molestias aliquam culpa incidunt id ipsum accusamus quibusdam vel quisquam commodi!
                Deleniti ut officiis nulla beatae ducimus molestias, architecto quis similique minima, harum a temporibus doloribus consequuntur, nemo voluptatem consequatur dolorum deserunt! Molestias illum reiciendis inventore ducimus assumenda placeat accusantium ea!</p>
        </div>

    );
}

export default CategoryHeader;
