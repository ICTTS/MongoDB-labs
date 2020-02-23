import json

with open("coordjson.json", "w+") as data:
    with open("linea10.txt", "r") as file:
        print(file)
        array = []
        geocoord = []
        for line in file:
            array = line.split()
            str1 = array[0].replace(']', '').replace('[', '')
            str2 = str1.split(",")
            print("[",str2[1],",",str2[0],"]")
            geocoord.append(str2)
        coord = []
    json.dump(coord, data)
