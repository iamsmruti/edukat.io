import { Button, Grid, Paper, Typography } from "@mui/material";
import { grey } from "@mui/material/colors";
import { Container } from "@mui/system";
import CartCard from "../comps/CartCard";
import { useNavigate } from "react-router-dom";

const Cart = ({ cartItems , handleRemoveItem}) => {
    const navigate = useNavigate()
    const total = cartItems.map(item => item.pricing).reduce((prev, curr) => prev + curr, null)
    console.log(total)
    
    return (
        <Container
            sx={{
                paddingTop: 3
            }}
        >
            <Grid container spacing={3}>
                <Grid item xs={12} md={8}>
                    <Paper
                        sx={{
                            p: 3
                        }}
                    >
                        {cartItems.length === 0 ? (
                            <>
                                <Typography
                                    variant="h5"
                                    sx={{
                                        fontWeight: 700
                                    }}
                                >
                                    Your Cart is empty
                                </Typography>
                            </>
                        ) : <>
                            <Typography
                                variant="h5"
                                sx={{
                                    fontWeight: 700,
                                    marginBottom: 4
                                }}
                            >
                                Your Cart
                            </Typography>
                        </>}

                        {cartItems.map((item) => (
                            <Paper
                                elevation={0}
                                sx={{
                                    border: 1,
                                    borderColor: grey[300],
                                    marginBottom: 2
                                }}
                            >
                                <CartCard handleRemoveItem={handleRemoveItem} item={item}/>
                            </Paper>
                        ))}
                    </Paper>
                </Grid>
                <Grid item xs={12} md={4}>
                    {total !== null ? <Paper
                        sx={{
                            p: 3
                        }}
                    >
                        <Typography
                            variant="h5"
                            sx={{
                                fontWeight: 700,
                                marginBottom: 4
                            }}
                        >
                            Summary
                        </Typography>
                        <Typography
                            variant="body1"
                            sx={{
                                fontWeight: 700
                            }}
                        >
                           Total : Rs. {total}
                        </Typography>

                        {total !== null ? <Button
                            fullWidth
                            variant="contained"
                            onClick={() => navigate('/dashboard')}
                            sx={{
                                mt: 2
                            }}
                        >
                            Proceed to Checkout
                        </Button> : null}
                    </Paper> : null}
                </Grid>
            </Grid>
        </Container>
    );
}

export default Cart;