**Data\_Integration\_Project\_Group\_23**

Tích hợp dữ liệu phim vào Data warehouse

I, Tổng quan			

Thực hiện tích hợp 4 nguồn phim vào data warehouse, bao gồm:

- MovieLen: <https://grouplens.org/datasets/movielens/> 
- TMDB: <https://www.kaggle.com/datasets/bhanushekhawat/tmdb-movies-dataset> 
- Rotten Tomatoes: <https://www.kaggle.com/datasets/stefanoleone992/rotten-tomatoes-movies-and-critic-reviews-dataset> 
- Metacritic: <https://www.kaggle.com/datasets/garcibo/metacritic-movie-15k-review-582k-dataset>

Ngoài ra, ta còn sử dụng thêm 3 nguồn dữ liệu khác phục vụ cho quá trình training:

- Netflix: [https://www.kaggle.com/datasets/ashishgup/netflix-rotten-tomatoes-metacritic-imdb]()
- IMDB: [https://www.kaggle.com/datasets/schoolofaitvm/imdbdataset]()
- Movie review and rating: <https://www.kaggle.com/datasets/newra008/movie-review-and-rating> 

Quá trình tích hợp gồm 4 bước chính:

- (1): Thiết lập data warehouse schema
- (2): Schema matching
- (3): Data Transform
- (4): Data Matching & Data Integration

II, Thư viện sử dụng chính

- Pandas
- Leveishtein
- Regex
- FlexMatcher
- FuzzyWuzzy

III, Hướng dẫn chạy code

- Chạy file folder\_create.py, chọn đường dẫn lưu dữ liệu và gán vào biến parent\_dir
- Tải dữ liệu và lưu dữ liệu như directory ở hình dưới

![](file_directory.png)

- (1): Ta chạy preprocess/rotten\_tomato\_preprocess.ipynb
- (2): Ta chạy schema\_matching.ipynb
- (3): Ta chạy lần lượt 3 file preprocess/movielen\_preprocess.ipynb, preprocess/metacritic\_preprocess.ipynb, preprocess/tmdb\_preprocess.ipynb
- (4): Ta chạy data\_matching.ipynb
