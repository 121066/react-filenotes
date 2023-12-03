import HeaderTop from './Header'
import SideItem from './Side'
import ContentLayout from './Content'
function LayoutManager() {
    return (
        <>
            <div className=" bg-#eee">
                <HeaderTop></HeaderTop>
                <SideItem></SideItem>
                <ContentLayout></ContentLayout>
            </div>
        </>
    )
}
export default LayoutManager
