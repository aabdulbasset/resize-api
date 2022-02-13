import sharp from 'sharp';
async function main(fileName: string, dimensions: number[]): Promise<number> {
  let isResolved: number = 0;
  try {
    await sharp(`${__dirname}/../images/full/${fileName}.jpg`)
      .resize(dimensions[0], dimensions[1])
      .toFile(
        `${__dirname}/../images/thumb/${fileName}_${dimensions[0]}x${dimensions[1]}.jpg`
      )
      .catch(() => {
        isResolved = -1;
      });
  } catch (err) {
    isResolved = -1;
  }

  return isResolved;
}

export default main;
