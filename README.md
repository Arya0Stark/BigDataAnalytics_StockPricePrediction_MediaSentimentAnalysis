#   Stock Price Prediction Based on Sentiment Analysis

## Objectives
Handling significantly large data and predicting the nature of changing stocks
To effectively compare different ML models by using ensemble learning
To see the nature of deep learning models used in short-term and long-term cases
Comparatively analyzing their accuracies to glean an understanding of their performance

## Data
### Twitter Data
Twscrape: An open-source library that scrapes relevant tweets according to company.
Data is fetched using 25 API calls company-wise for each day by filtering out any links, media, and replies. 

### Preprocessing pipeline


<img width="458" alt="image" src="https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/49d23bf3-6871-4e7f-a830-6a1fb5ec717c">

### Word Cloud Visualizations
![image](https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/aa33e173-069f-4f6d-8555-6bc16d5b8cdd)
![image](https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/eb7c3032-bbbd-429d-b9c5-7371cdda6ed4)
![image](https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/0e1ac82a-472f-4fd6-9c7a-e0d95200f459)



### Stock Data
Extract the stock price and volumes since  2021 01-01, i.e 3 years approx by selecting 3 companies: Google, Amazon and Microsoft

Used the Technical Analysis Package to add more indicators and performed PCA

## Models Used

![image](https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/8b87ed33-9c60-45d3-8efa-1087c64cf4e8)


## System Overview

![image](https://github.com/vethavikashini-cr/EECS6893_FinalProject_Team15/assets/145593646/57d7a58c-f0b3-45f9-b6e7-bad625fb7352)


# Authors
### Balachander Sathianarayanan - bs3507@columbia.edu

### Swasthi P Rao - spr2139@columbia.edu

### Vethavikashini Chithrra Raghuram - vc2652@columbia.edu
