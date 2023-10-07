import { useEffect, useState } from "react";
import { useCoinContext } from "@/context/coin/coin.context";

const CoinsWidget = () => {
    const { coins, searchCoins }: any = useCoinContext();
    const [keyword, setKeyword]: any = useState('');

    useEffect(() => {
        searchCoins(keyword);
    }, [keyword, searchCoins]);

    return (
        <div className="row g-4">
            <div className="col-12">
                <input type="search" id="coin-search" placeholder="Search coin..." className="form-control form-control-sm shadow-none lh-lg px-lg-3 py-lg-2" name="keyword" value={keyword} onChange={(e) => {
                    setKeyword(e.target.value)
                }} />
            </div>
            <div className="col-12">
                {
                    coins.length ? <div className="table-responsive">
                        <table className="table lh-lg">
                            <thead className="small">
                                <tr>
                                    <th>Currency Pair</th>
                                    <th className="d-none d-md-block ">Key</th>
                                    <th className="text-end text-md-start">Rate</th>
                                </tr>
                            </thead>
                            <tbody className="small">
                                {
                                    coins.map(([key, value]: [string, any]) => {
                                        return (
                                            <tr key={key}>
                                                <td className="py-3"><span>{key}</span>
                                                    <p className="d-block d-md-none text-muted small mb-0">Key: {value?.key}</p></td>
                                                <td className="d-none d-md-block py-3">{value?.key}</td>
                                                <td className="text-end text-md-start py-3">{Number(value?.rate).toFixed(2)}</td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    </div> : <div className="text-center">
                        <span>No data found</span>
                    </div>
                }
            </div>
        </div>
    )
}

export default CoinsWidget;