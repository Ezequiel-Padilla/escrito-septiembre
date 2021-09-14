class MeetingSerializer {
  static deSerialize(data) {
    return {
      type: data.type,
      topic: data.topic,
      startTime: data.startTime,
      duration: data.duration,
    };
  }
}

export default MeetingSerializer;
