import json
import codecs
with open('data.json', encoding='utf-8-sig') as d:
    data = json.load(d)

filters = [
    [
        "Recipes",
        [data["Recipes"]],
        ["Category", "Source","Season/Event","Season/Event Exclusive"]
    ],
    [
        "Reactions",
        [data["Reactions"]],
        ["Source"]
    ],
    [
        "Music",
        [data["Music"]],
        ["Source","Source Notes","Catalog"]
    ],
    [
        "Furniture",
        [
            data["Housewares"],
            data["Miscellaneous"],
            data["Wall-mounted"],
            data["Photos"],
            data["Posters"]
        ],
        ["Tag", "Catalog", "Color 1","Color 2","Variation","Source", "DIY", "Size", "Season/Event", "Season/Event Exclusive", "HHA Concept 1", "HHA Concept 2", "HHA Series", "HHA Set", "HHA Category"]
    ],
    [
        "Clothing",
        [
            data["Headwear"],
            data["Accessories"],
            data["Tops"],
            data["Dress-Up"],
            data["Clothing Other"],
            data["Bottoms"],
            data["Socks"],
            data["Shoes"],
            data["Bags"],
            data["Umbrellas"],
        ],
        ["Catalog", "Style 1","Style 2","Color 1","Color 2","Variation","Seasonality","Source", "DIY", "Size", "Season/Event", "Season/Event Exclusive", "Label Themes"]
    ],
    [
        "Floor & Walls",
        [
            data["Floors"],
            data["Rugs"],
            data["Wallpaper"]
        ],
        ["Tag","Color 1","Color 2","Source","DIY","Size","Season/Event", "Season/Event Exclusive", "HHA Concept 1", "HHA Concept 2", "HHA Series",]
    ],
    [
        "Fish",
        [
            data["Fish"]
        ],
        ["Where/How","Shadow"]
    ],
    [
        "Bugs",
        [
            data["Insects"]
        ],
        ["Weather","Where/How"]
    ],
    [
        "Sea Creatures",
        [
            data["Sea Creatures"],
        ],
        ["Shadow","Movement Speed"]
    ],
    [
        "Villagers",
        [
            data["Villagers"]
        ],
        ["Personality","Species","Hobby","Style 1","Style 2","Color 1","Color 2"]
    ],
    [  
        "All Items",
        [
            data["Housewares"],
            data["Miscellaneous"],
            data["Wall-mounted"],
            data["Photos"],
            data["Posters"],
            data["Headwear"],
            data["Accessories"],
            data["Tops"],
            data["Dress-Up"],
            data["Clothing Other"],
            data["Bottoms"],
            data["Socks"],
            data["Shoes"],
            data["Bags"],
            data["Umbrellas"],
            data["Floors"],
            data["Rugs"],
            data["Wallpaper"],
            data["Recipes"],
            data["Tools"],
            data["Fish"],
            data["Insects"],
            data["Sea Creatures"],
            data["Fossils"],
            data["Art"],
            data["Villagers"],
            data["Music"],
            data["Reactions"],
            data["Construction"],
            data["Fencing"],
            data["Other"],
        ],
        [
            "Source",
            "Tag",
            "DIY",
            "Catalog",
            "Where/How",
            "Weather",
            "Shadow",
            "Movement Speed",
            "Season/Event",
            "Category",
            "Season/Event Exclusive",
            "Seasonality",
            "Personality",
            "Species",
            "Hobby",
            "Style 1",
            "Style 2",
            "Color 1",
            "Color 2",
            "Label Themes",
            "Variation",
            "Size",
            "HHA Concept 1",
            "HHA Concept 2",
            "HHA Series",
            "HHA Set",
            "HHA Category",
            "Version Added"
        ]
    ]
]

possibleFilters = []
count = -1
count2 = -1
output = {}
currentCategory = {}
totalFilters = []
doneFilters = []
for filterSet in filters:
    count+=1
    count2 = -1
    print("Generating filter definitions: " + str(int(count/len(filters) * 100)) + "%")
    for filter in filterSet[2]:
        currentCategory["name"] = filter
        currentCategory["id"] = filter
        count2+=1
        print("Generating filter definitions:   " + str(int(count2/len(filterSet[2]) * 100)) + "%")
        for dataSet in filterSet[1]:
            for datum in dataSet:
                if(datum.get(filter)==None):
                    continue
                currentFilter = {"name":"", "id":""}
                if "; " in datum.get(filter):
                    allFilters = datum.get(filter).split("; ")
                    for singleFilter in allFilters:
                        currentFilter = {"name":"", "id":""}
                        if singleFilter not in doneFilters:
                            doneFilters.append(singleFilter)
                            currentFilter["name"] = singleFilter
                            currentFilter["id"] = filter+ ":" + singleFilter
                            possibleFilters.append(currentFilter)
                            
                elif datum.get(filter) not in doneFilters:
                    currentFilter["name"] = datum.get(filter)
                    currentFilter["id"] = filter+ ":" + datum.get(filter)
                    possibleFilters.append(currentFilter)
                    doneFilters.append(datum.get(filter))
        currentCategory["children"]=possibleFilters
        possibleFilters = []
        totalFilters.append(currentCategory)
        currentCategory = {}
        doneFilters=[]
    output[filterSet[0]] = totalFilters
    totalFilters = []


with open('Generated/filterDefinitions.json', 'w', encoding='utf8') as json_file:
    json.dump(output, json_file, ensure_ascii=False,indent=2)
input("Done")
