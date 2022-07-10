import os

def create_folder(dir):
    if not os.path.isdir(dir):
        os.mkdir(dir)

# Chỉnh sửa file này "/Users/trananhvu/Documents/Tichhopdulieu/Data_Integration_Group23"
parent_dir = "/Users/trananhvu/Documents"
data_folder = "Data"
data_dir = os.path.join(parent_dir, data_folder)

create_folder(data_dir)

data_matching_folder = "data_matching"
metacritic_folder = "metacritic"
movielen_folder = "movielen"
tomato_folder = "rotten_tomatoes"
tmdb_folder = "tmdb"
train_data_folder = "train_data"
warehouse_folder = "warehouse"

data_matching_dir = os.path.join(data_dir, data_matching_folder)
metacritic_dir = os.path.join(data_dir, metacritic_folder)
movielen_dir = os.path.join(data_dir, movielen_folder)
tomato_dir = os.path.join(data_dir, tomato_folder)
tmdb_dir = os.path.join(data_dir, tmdb_folder)
train_data_dir = os.path.join(data_dir, train_data_folder)
warehouse_dir = os.path.join(data_dir, warehouse_folder)

create_folder(data_matching_dir)
create_folder(metacritic_dir)
create_folder(movielen_dir)
create_folder(tomato_dir)
create_folder(tmdb_dir)
create_folder(train_data_dir)
create_folder(warehouse_dir)

mapping_folder = "mapping"
preprocess_folder = "preprocess"

metacritic_preprocess_dir = os.path.join(metacritic_dir, preprocess_folder)
movielen_preprocess_dir = os.path.join(movielen_dir, preprocess_folder)
tmdb_preprocess_dir = os.path.join(tmdb_dir, preprocess_folder)
metacritic_mapping_dir = os.path.join(metacritic_dir, mapping_folder)
tmdb_mapping_dir = os.path.join(tmdb_dir, mapping_folder)

create_folder(metacritic_preprocess_dir)
create_folder(movielen_preprocess_dir)
create_folder(tmdb_preprocess_dir)
create_folder(metacritic_mapping_dir)
create_folder(tmdb_mapping_dir)

field_value_folder = "field_value"
field_value_dir = os.path.join(warehouse_dir, field_value_folder)
create_folder(field_value_dir)