import { useEffect, useState } from "react";

const CoinsWidget = (data: any) => {
    const items = Object.entries(data.data);

    const [keyword, setKeyword] = useState('');
    const [filteredItems, setFilteredItems] = useState(items);

    useEffect(() => {
        const filtered = items.filter((item) => item[0].toLowerCase().includes(keyword.toLowerCase()));
        setFilteredItems(filtered);
    }, [keyword]);

    return (
        <div className="row g-4">
            <div className="col-12">
                <input type="search" id="coin-search" placeholder="Search coin by name..." className="form-control form-control-sm shadow-none lh-lg px-lg-3 py-lg-2" name="keyword" value={keyword} onChange={(e) => {
                    setKeyword(e.target.value)
                }} />
            </div>
            <div className="col-12">
                <div className="list-group lh-lg small">{
                    filteredItems.length ? filteredItems.map(([key, value]) => {
                        return (
                            <div className="list-group-item d-flex align-items-center justify-content-between py-3" key={key}>
                                <div>
                                    <span className="fw-regular">{key}</span>
                                </div>
                                <div className="text-end">
                                    <span className="fw-regular">{value?.rate}</span>
                                </div>
                            </div>
                        )
                    }) : (
                        <div className="list-group-item text-center py-3">
                            No data found
                        </div>
                    )
                }</div>
            </div>
        </div>
    )
}

export default CoinsWidget;