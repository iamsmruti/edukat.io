import {
    TextField,
    InputAdornment,
    FormGroup,
    FormControlLabel,
    Checkbox,
    Button,
    FormLabel,
} from '@mui/material'
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';

const FilterComp = ({setQuery}) => {
    return (
        <>
            <TextField
                onChange={(e) => setQuery(e.target.value)}
                fullWidth
                label="Search"
                variant="outlined"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="start">
                            <SearchIcon />
                        </InputAdornment>
                    ),
                }}
            />

            <FormGroup>
                <FormLabel sx={{
                    mt: 2,
                    fontWeight: 700
                }}
                    variant='body1'>Category</FormLabel>
                <FormControlLabel control={<Checkbox value={'web development'} onChange={(e) => setQuery(e.target.value)}/>} label="Web Development" />
                <FormControlLabel control={<Checkbox value={'programming'} onChange={(e) => setQuery(e.target.value)}/>} label="Programming" />
                <FormControlLabel control={<Checkbox value={'english'} onChange={(e) => setQuery(e.target.value)}/>} label="English" />
                <FormControlLabel control={<Checkbox value={'engineering'} onChange={(e) => setQuery(e.target.value)}/>} label="Engineering" />
            </FormGroup>

            <FormGroup>
                <FormLabel sx={{
                    mt: 2,
                    fontWeight: 700
                }}
                    variant='body1'>Levels</FormLabel>
                <FormControlLabel control={<Checkbox value={'all'} onChange={(e) => setQuery(e.target.value)}/>} label="All Levels" />
                <FormControlLabel control={<Checkbox value={'beginner'} onChange={(e) => setQuery(e.target.value)}/>} label="Beginner" />
                <FormControlLabel control={<Checkbox value={'intermediate'} onChange={(e) => setQuery(e.target.value)}/>} label="Intermediate" />
                <FormControlLabel control={<Checkbox value={'expert'} onChange={(e) => setQuery(e.target.value)}/>} label="Expert" />
            </FormGroup>

            <FormGroup>
                <FormLabel sx={{
                    mt: 2,
                    fontWeight: 700
                }}
                    variant='body1'>Price</FormLabel>
                <FormControlLabel control={<Checkbox value={'free'} onChange={(e) => setQuery(e.target.value)}/>} label="Free" />
                <FormControlLabel control={<Checkbox value={'paid'} onChange={(e) => setQuery(e.target.value)}/>} label="Paid" />
            </FormGroup>

            <Button
                startIcon={<ClearIcon />}
                sx={{
                    mt: 3
                }}
                variant="outlined"
            >
                Clear all Filters
            </Button>
        </>
    );
}

export default FilterComp;