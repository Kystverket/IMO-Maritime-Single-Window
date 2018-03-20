using Moq;
using NUnit.Framework;

public class ControllerTestBase
{
    public MockRepository MockRepository {get; private set; }

    [SetUp]
    public void ControllerTestBaseSetup()
    {
        MockRepository = new MockRepository(MockBehavior.Strict) { DefaultValue = DefaultValue.Empty };
    }

    [TearDown]
    public void VerifyAndTearDown()
    {
        MockRepository.VerifyAll();
    }


    
}