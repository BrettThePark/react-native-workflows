#!/bin/bash
BLUE='\033[0;34m'
BBLUE='\033[1;34m' #BOLD
PURPLE='\033[0;35m'
RED='\033[0;31m'
BRED='\033[1;31m' #BOLD
GREEN='\033[0;32m'
BGREEN='\033[1;32m' #BOLD
GRAY='\033[1;30m'
NC='\033[0m' # No Color

echo -e "${BLUE}Building shared-auth package...${NC}"
cd ./shared-auth && yarn build && cd ..

echo -en "${BLUE}Creating new folder in node_modules...${NC}"
rm -rf "./node_modules/@pxblue/react-auth-shared"
mkdir -p "./node_modules/@pxblue/react-auth-shared"
echo -e "${GREEN}Done${NC}"

echo -en "${BLUE}Copying build output into workflow node_modules...${NC}";
cp -r ./shared-auth/package.json ./node_modules/@pxblue/react-auth-shared/package.json
cp -r ./shared-auth/lib/. ./node_modules/@pxblue/react-auth-shared/lib
echo -e "${GREEN}Done${NC}"

echo -en "\r\n${BLUE}Linking Shared Auth to workflow: ${NC}"
if [ ! -f ./node_modules/@pxblue/react-auth-shared/package.json ]; then echo -e "${BRED}Not Linked${NC}" && exit 1; fi
if [ ! -s ./node_modules/@pxblue/react-auth-shared ];
    then
        if [ ! -f ./node_modules/@pxblue/react-auth-shared/lib/commonjs/index.js ];
        then echo -e "${BRED}Not Linked${NC}" && exit 1;
        fi;
fi
echo -e "${GRAY}Complete${NC}\r\n"