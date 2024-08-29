import EstimatedBalance from '../DashBoardElement/EstimatedBalance/EstimatedBalance';
import MarketPanel from '../DashBoardElement/MarketPanel/MarketPanel';

const DashBoardOverview = () => {
    return (
        <div>
            <EstimatedBalance />
            <MarketPanel />
        </div>
    );
};

export default DashBoardOverview;
