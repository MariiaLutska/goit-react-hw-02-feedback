import Box from 'components/Box';
import { Button } from './FeedbackOptions.styled';

export const FeedbackOptions = ({ options, onLeaveFeedback }) => {
    return (
        <Box justifyContent="center">
            {options.map(name => {
                return (
                    <Button
                key = { name }
                name = { name }
                onClick = {()=>onLeaveFeedback(name)}
            >
            {name}
        </Button>
    );
            })}
        </Box>
    );
};