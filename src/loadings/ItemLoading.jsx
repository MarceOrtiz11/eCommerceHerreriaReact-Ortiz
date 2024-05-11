import "./itemLoading.css"

const ItemLoading = () => {
    retur(
        <div className="item-list-loading">{Array.from({ length: 8 }).map((_, i) => (
                <div key={i} className="card">
                    <div className="image-box-card-loading"></div>
                        <div className="info-card">
                            <h2 className="title-card-loading"></h2>
                            <p className="description-card-loading"></p>
                        <div className="box-button-item">
                            <div className="button-item"></div>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ItemLoading;