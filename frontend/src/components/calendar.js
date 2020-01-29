import React, { useState } from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import { makeStyles } from '@material-ui/core/styles';
import { CardActionArea, CardContent } from '../../node_modules/@material-ui/core';
import Typography from '@material-ui/core/Typography';
/** Given the MDY, return the day of the week
 * Inputs: Month(1-12): Integer, Day(1-31): Integer, Year(0000-20XX): Integer
 * Returns an Integer 0 - 6 with 0 being Sunday and being Saturday
 */
function determineDayOfWeek(month, day, year) {
    var yearLastTwo = ((year%10)) + (Math.trunc(year/10)%10)*10;
    var yearFirstTwo = Math.trunc(year/100);
    console.log (yearLastTwo);
    console.log (yearFirstTwo);
    var newMonth = 0;
    newMonth = month - 2;
    if (newMonth <= 0) {
        newMonth = newMonth + 12;
    }
    if (month === 1 || month === 2) {
        yearLastTwo = yearLastTwo - 1;
    }
    var end = (day + Math.floor(2.6*newMonth - 0.2) - 2*yearFirstTwo + yearLastTwo + Math.floor(yearLastTwo / 4) + Math.floor(yearFirstTwo / 4))%7
    return end;
}
/**
 * Returns the number of days given a month
 * @param month: Integer (1-12)
 * @param year: Integer (0000-20XX)
 */
function daysInMonth(month, year) {
    if (month == 2) {
        if (year%4 == 0) {
            return 29;
        }
        return 28;
    }
    if (((month%2 === 1) && month < 9) || (month%2 === 0 && month > 7)) {
        return 31;
    }
    return 30;
}
function monthToString(month) {
    var monthString = "Invalid";
    //TODO: Error check code
    switch(month) {
        case 1:
            return "January";
        case 2:
            return "February";
        case 3:
            return "March";
        case 4:
            return "April";
        case 5:
            return "May";
        case 6:
            return "June";
        case 7:
            return "July";
        case 8:
            return "August";
        case 9:
            return "September";
        case 10:
            return "October";
        case 11:
            return "November";
        case 12:
            return "December";
    }
}
const useStyles = makeStyles({
    card: {
      maxWidth: 100,
    },
  });
  
function Calendar(props) {
    const [test, setTest] = useState('Testing!');
    const [currentMonth, setMonth] = useState(1);
    const week = [0,1,2,3,4,5,6];
    const row = [0,1,2,3,4];
    const classes = useStyles();
    return (
        <div>
            <p>{test}</p>
            <p>{props.todaysDate}</p> 
            <p>{Math.trunc(7/2)}</p>
            <p>{daysInMonth(2, 2020)}</p>
            <Grid container spacing={2}>
                {/* Row 0*/}
                <Grid item xs={12}>
                    <h1>{monthToString(currentMonth)}</h1>
                </Grid>
                {row.map(val =>
                    <Grid key={val} item justify="center" xs={12}> 
                        <Grid container justify="center" spacing={2}>
                            {week.map(value => (
                                <Grid key={value} item xs={1}>
                                    <Card className={classes.card}>
                                        <CardActionArea>
                                            <CardContent>
                                                <Typography>
                                                    {determineDayOfWeek(value)}
                                                </Typography>
                                            </CardContent>
                                        </CardActionArea>
                                    </Card>
                                </Grid>
                            ))}
                        </Grid>
                    </Grid>
                )}
            </Grid>
        </div>
    )
}


export default Calendar;