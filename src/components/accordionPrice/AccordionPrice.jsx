import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import AccordionDetails from '@mui/material/AccordionDetails';
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';


export const AccordionPrice = () => {
    return(
        <>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AddOutlinedIcon sx={{ color: "rgb(235, 91, 41)", fontSize: 40}}/>}
                    id="panel1-header">
                    <Typography sx={{fontSize: 24}}>
                        СЕО оптимизация
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: 18}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto asperiores at beatae delectus deleniti deserunt dignissimos distinctio dolorem dolorum eaque earum eligendi eos, esse et illo maiores modi molestiae pariatur quibusdam sapiente sequi soluta? Ab adipisci enim necessitatibus quasi voluptatum. Accusamus adipisci dolorum harum in molestias nemo quibusdam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AddOutlinedIcon sx={{ color: "rgb(235, 91, 41)", fontSize: 40}}/>}
                    id="panel1-header">
                    <Typography sx={{fontSize: 24}}>
                        Админ панель
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: 18}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto asperiores at beatae delectus deleniti deserunt dignissimos distinctio dolorem dolorum eaque earum eligendi eos, esse et illo maiores modi molestiae pariatur quibusdam sapiente sequi soluta? Ab adipisci enim necessitatibus quasi voluptatum. Accusamus adipisci dolorum harum in molestias nemo quibusdam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AddOutlinedIcon sx={{ color: "rgb(235, 91, 41)", fontSize: 40}}/>}
                    id="panel1-header">
                    <Typography sx={{fontSize: 24}}>
                        Размещение сайта на хостинге + подбор домена
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: 18}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto asperiores at beatae delectus deleniti deserunt dignissimos distinctio dolorem dolorum eaque earum eligendi eos, esse et illo maiores modi molestiae pariatur quibusdam sapiente sequi soluta? Ab adipisci enim necessitatibus quasi voluptatum. Accusamus adipisci dolorum harum in molestias nemo quibusdam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<AddOutlinedIcon sx={{ color: "rgb(235, 91, 41)", fontSize: 40}}/>}
                    id="panel1-header">
                    <Typography sx={{fontSize: 24}}>
                        Гарантия на 2 мес с возможностью продления за 20$ мес
                    </Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography sx={{fontSize: 18}}>
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias aliquam architecto asperiores at beatae delectus deleniti deserunt dignissimos distinctio dolorem dolorum eaque earum eligendi eos, esse et illo maiores modi molestiae pariatur quibusdam sapiente sequi soluta? Ab adipisci enim necessitatibus quasi voluptatum. Accusamus adipisci dolorum harum in molestias nemo quibusdam?
                    </Typography>
                </AccordionDetails>
            </Accordion>
        </>
    )
}
