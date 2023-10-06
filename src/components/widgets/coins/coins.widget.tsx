const CoinsWidget = (data: any) => {
    const items = data.data;

    return (
        <div className="row g-4">
            <div className="col-12">
                <input type="search" id="coin-search" placeholder="Search coin by name..." className="form-control form-control-sm shadow-none lh-lg px-lg-3 py-lg-2" />
            </div>
            <div className="col-12">
                <div className="list-group lh-lg small">{
                    items.length ? items.map(([key, value]: any) => {
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