import { Button,Paper } from "@mui/material";
import { TreeItem, TreeView } from '@mui/lab';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';

import { useNavigate } from "react-router-dom";
const Dropdown = ({ text, items }) => {
    const navigate = useNavigate()


    return (
        <TreeView
            defaultCollapseIcon={<ExpandMoreIcon />}
            defaultExpandIcon={<ChevronRightIcon />}
            sx={{ display: 'flex', alignItems: 'center' , mr: 1, color: 'white', mb: {xs : 3, md: 0.5}, mt: {xs : 1}}}
        >
            <TreeItem nodeId="1" label={text}>
                <Paper 
                    sx={{
                        position: 'absolute',
                        p: 2,
                        zIndex: 100
                    }}
                >
                    {items.map((item) => <Button
                        key={item.title}
                        onClick={() => navigate(item.path)}
                        sx={{
                            my: 2,
                            color: 'black',
                            display: 'block',
                            marginRight: 1
                        }}
                    >{item.title}</Button>
                    )}</Paper>
            </TreeItem>

        </TreeView>
    )
}

export default Dropdown;